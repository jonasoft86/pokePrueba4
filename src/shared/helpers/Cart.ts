import {ref} from "vue"

export const cart = ref({
    isOpened: false,
    setIsOpened(value:boolean){
        console.log(value)
        this.isOpened = value
    }
})