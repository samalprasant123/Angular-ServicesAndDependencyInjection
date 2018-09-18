export class LoggingService {

    logAccountStatusChange(accountStatus: string) {
        console.log('A server status changed, new status: ' + accountStatus);
    }

}
