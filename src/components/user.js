import { getCurrentInstance } from 'vue'

class User{
    constructor(){
        this.ws = {}
        this.connected = false;
        this.username = 'Default';
        this.lastname = '';
        this.apps = [];
    }

    login(){
        return new Promise((resolve, reject) => {
            const ws_conn = new WebSocket("ws://localhost:8080/api/ws/")
            ws_conn.onopen = (e) => {
                this.ws = e;
                this.connected = true;
                this.ws.send(JSON.stringify({
                    type: 'login',
                    username: this.username,
                    lastname: this.lastname
                }));
                resolve(this);
            }
            ws_conn.onclose = (e) => {
                this.connected = false;
                reject(this);
            }
        })
    }
}

export default User

export function AppUser() {return getCurrentInstance().appContext.config.globalProperties.$user}