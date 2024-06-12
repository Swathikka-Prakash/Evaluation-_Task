import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateAssetDto {
  @IsString()
  @IsNotEmpty()
  asset_name: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  asset_type: string;

  @IsEnum(['Active', 'Inactive', 'Deleted'])
  status: string;
}
