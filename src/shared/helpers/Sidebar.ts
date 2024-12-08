import {ref} from "vue"

export const sideBar = ref({
    isOpened: false,
    setIsOpened(value:boolean){
        console.log(value)
        this.isOpened = value
    }
})