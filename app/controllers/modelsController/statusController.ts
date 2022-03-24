import { Status } from '../../models';

const statusController = {
    async getAllStatus(){
        const status: Status[] = await Status.findAll();
        // console.log(status);
        return status;
    },

    async getStatus(statusId: number){
        const status: Status = await Status.findByPk(statusId);
        return status;
    },

    async createStatus(){
        
    },

    async updateStatus(){

    },

    async deleteStatus(){

    },
};

export default statusController;