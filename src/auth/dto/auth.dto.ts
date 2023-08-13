import { ApiProperty } from "@nestjs/swagger";

export class userType{
 
    @ApiProperty()
    email:String;
  
    @ApiProperty()
    pass_word:String;
  
    @ApiProperty()
    full_name:String;
  
    @ApiProperty()
    birth_day:String;
  
    @ApiProperty()
    gender:Boolean;
  
    @ApiProperty()
    user_role:String;
  
    @ApiProperty()
    phone:String;
  
  }

export class loginType{
    @ApiProperty()
    // @ApiProperty()
    email:String

    @ApiProperty()
    // @ApiProperty()
    pass_word:String
}


