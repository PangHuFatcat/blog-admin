declare namespace API {
    interface Response<T> {

        code: number
        msg: string
        data?: T
    }

    namespace Post {
        interface Item {
            id: string
            content: string
        }

        interface GetPostRes extends Response<Item[]> {}
    }

    namespace User {
        interface Info {
            name: string
            icon: string
        }

        interface Login {
            account: string
            password: string
        }

        interface Logged {
            token: string
        }

        interface PostLoggedRes extends Response<Logged> {}
    }
}