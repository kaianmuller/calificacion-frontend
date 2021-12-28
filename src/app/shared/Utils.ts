export class Utils{

    static ip(){
    return 'http://localhost:8080/v1';
    }


    static isEmpty(obj: any) {
        return !(obj && Object.values(obj).length !== 0);
      }
}