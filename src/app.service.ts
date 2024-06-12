import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Asset, AssetDocument } from './entity/asset.entity';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Asset.name) private assetModel: Model<AssetDocument>,
  ) {}

  async create(createAssetDto: CreateAssetDto) {
    try {
      const is_exist = await this.assetModel.findOne({
        asset_name: createAssetDto.asset_name,
      });
      if (is_exist) {
        return {
          status: 200,
          massage: `Asset name ${is_exist.asset_name} is already exist`,
        };
      }
      const createdAsset = new this.assetModel(createAssetDto);
      const saved_data = await createdAsset.save();
      return saved_data;
    } catch (error) {
      console.log('error------->', error);
      return error.massage;
    }
  }

  async findAll() {
    try {
      const asset_datas = await this.assetModel.find({ status: 'Active' });
      if (!asset_datas) {
        return {
          status: 200,
          massage: 'No data found',
        };
      }
      return {
        status: 200,
        data: asset_datas,
        massage: 'Data found',
      };
    } catch (error) {
      console.log('error------------>', error);
      return error.massage;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} asset`;
  }

  async update(id: string, updateAssetDto: UpdateAssetDto) {
    try {
      const updatedAsset = await this.assetModel.findByIdAndUpdate(
        { _id: id },
        updateAssetDto,
        { new: true },
      );
      return updatedAsset;
    } catch (error) {
      console.error('Error updating asset:', error);
      throw error;
    }
  }

  async delete(id: string) {
    try {
      const data = await this.assetModel.findByIdAndUpdate(
        { _id: id },
        {
          status: 'Deleted',
        },
      );
      return { status: 200, data: data, message: 'deleted' };
    } catch (error) {
      console.log('error------------>', error);
      return error.massage;
    }
  }
}
