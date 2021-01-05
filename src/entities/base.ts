import {Dictionary, VueRouter} from "vue-router/types/router";

export abstract class BaseEntity {
    abstract url_name: string;

    redirect(router: VueRouter) {
        router.push({
            name: this.url_name,
            params: this.get_params()
        })
            .catch(err => console.log(err))

    }

    protected abstract get_params(): Dictionary<string>;
}

export interface BaseObject {
    $entity: BaseEntity;
}
