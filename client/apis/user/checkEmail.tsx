import axios from "axios"

const checkEmail = async(email : string) => { // 요청메소드 + 요청정보
    return await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/members/checkEmail/${email}`)
    .catch((err)=> {
        return err;
    })
}

export default checkEmail;