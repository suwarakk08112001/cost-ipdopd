import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class IsTimeStartBeforeTimeEndConstraint implements ValidatorConstraintInterface {
    validate(timeEnd: string, args: ValidationArguments): boolean;
    defaultMessage(): string;
}
export declare class SearchDashboardDto {
    datePicker?: string;
    timeStart?: string;
    timeEnd?: string;
}
