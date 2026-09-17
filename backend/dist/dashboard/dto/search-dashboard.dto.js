var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsDateString, IsOptional, IsNotEmpty, Matches, ValidateIf, Validate, ValidatorConstraint, } from 'class-validator';
let IsTimeStartBeforeTimeEndConstraint = class IsTimeStartBeforeTimeEndConstraint {
    validate(timeEnd, args) {
        const obj = args.object;
        if (!obj.timeStart || !timeEnd)
            return true;
        return obj.timeStart < timeEnd;
    }
    defaultMessage() {
        return 'timeStart must be earlier than timeEnd';
    }
};
IsTimeStartBeforeTimeEndConstraint = __decorate([
    ValidatorConstraint({ name: 'isTimeStartBeforeTimeEnd', async: false })
], IsTimeStartBeforeTimeEndConstraint);
export { IsTimeStartBeforeTimeEndConstraint };
export class SearchDashboardDto {
    datePicker;
    timeStart;
    timeEnd;
}
__decorate([
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], SearchDashboardDto.prototype, "datePicker", void 0);
__decorate([
    ValidateIf((o) => !!o.timeEnd),
    IsNotEmpty({ message: 'timeStart is required when timeEnd is provided' }),
    Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, {
        message: 'timeStart must be in HH:mm:ss format (e.g. 00:00:00)',
    }),
    __metadata("design:type", String)
], SearchDashboardDto.prototype, "timeStart", void 0);
__decorate([
    IsOptional(),
    Matches(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/, {
        message: 'timeEnd must be in HH:mm:ss format (e.g. 00:00:00)',
    }),
    Validate(IsTimeStartBeforeTimeEndConstraint),
    __metadata("design:type", String)
], SearchDashboardDto.prototype, "timeEnd", void 0);
//# sourceMappingURL=search-dashboard.dto.js.map