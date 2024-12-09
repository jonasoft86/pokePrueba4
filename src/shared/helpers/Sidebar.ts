import {ref} from "vue"

export const sideBar = ref({
    isOpened: false,
    setIsOpened(value:boolean){
        this.isOpened = value
    }
})