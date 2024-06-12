import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';
import { Document } from 'mongoose';

export type AssetDocument = Asset & Document;

@Schema({ collection: 'asset', versionKey: false })
export class Asset {
  @Prop({
    type: SchemaTypes.String,
    default: () => new Types.ObjectId().toHexString(),
  })
  _id: string;

  @Prop()
  asset_name: string;

  @Prop()
  category: string;

  @Prop()
  asset_type: string;

  @Prop()
  status: string;
}

export const AssetSchema = SchemaFactory.createForClass(Asset);
