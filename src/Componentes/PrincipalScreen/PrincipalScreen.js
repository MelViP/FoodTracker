import { Button } from '@chakra-ui/react'
import "./PrincipalScreen.css"

export const PrincipalScreen = () => {
    
    return (
        <div className='bigContainer'>
            <div className="container">
                <h2>FOOD TRACKER</h2>
                <h3>Avoid wasting food and get nutritious recipes along the way!</h3>
                <Button
                    variant={"solid"}
                    backgroundColor="#A8097D"
                    colorScheme='pink'
                    color="white"
                    onClick={()=>{

                    }}
                    type='submit'
                > Button </Button>
            </div>
        </div>
    )
}