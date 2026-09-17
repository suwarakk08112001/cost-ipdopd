import {
  IsDateString,
  IsOptional,
  IsNotEmpty,
  Matches,
  ValidateIf,
  Validate,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'isTimeStartBeforeTimeEnd', async: false })
export class IsTimeStartBeforeTimeEndConstraint implements ValidatorConstraintInterface {
  validate(timeEnd: string, args: ValidationArguments) {
    const obj = args.object as SearchDashboardDto;
    if (!obj.timeStart || !timeEnd) return true; // ให้ decorator อื่นจัดการกรณีไม่มีค่า
    return obj.timeStart < timeEnd;
  }

  defaultMessage() {
    return 'timeStart must be earlier than timeEnd';
  }
}

export class SearchDashboardDto {
  @IsOptional()
  @IsDateString()
  datePicker?: string;

  @ValidateIf((o) => !!o.timeEnd)
  @IsNotEmpty({ message: 'timeStart is required when timeEnd is provided' })
  @Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, {
    message: 'timeStart must be in HH:mm:ss format (e.g. 00:00:00)',
  })
  timeStart?: string;

  @IsOptional()
  @Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, {
    message: 'timeEnd must be in HH:mm:ss format (e.g. 00:00:00)',
  })
  @Validate(IsTimeStartBeforeTimeEndConstraint)
  timeEnd?: string;
}
