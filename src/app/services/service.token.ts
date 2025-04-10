import { InjectionToken } from "@angular/core";
import { IClientService } from "./api-client/clients/iclients.service";
import { ISnackbarManegerService } from "./isnackbar-maneger.service";
import { IDialogManegerService } from "./idialog-maneger.service";
import { IScheduleService } from "./api-client/schedules/ischedule.service";

export const SERVICES_TOKEN ={
    HTTP: {
        CLIENT: new InjectionToken<IClientService>('SERVICES_TOKEN.HTTP.CLIENT'),
        SCHEDULE:new InjectionToken<IScheduleService>('SERVICES_TOKEN.HTTP.SCHEDULE')
    },
    SNACKBAR: new InjectionToken<ISnackbarManegerService>('SERVICES_TOKEN.SNACKBAR'),
    DIALOG: new InjectionToken<IDialogManegerService>('SERVICES_TOKEN.DIALOG')
}