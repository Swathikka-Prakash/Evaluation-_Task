import { IsEnum, IsString } from 'class-validator';

export class UpdateAssetDto {
  @IsString()
  asset_name: string;

  @IsString()
  category: string;

  @IsString()
  asset_type: string;

  @IsEnum(['Active', 'Inactive', 'Deleted'])
  status: string;
}
