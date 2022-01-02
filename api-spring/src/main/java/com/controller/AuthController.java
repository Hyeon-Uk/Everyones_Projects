package com.controller;

import com.dao.UserDao;
import com.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("auth")
public class AuthController {

    @Autowired
    public UserDao userDao;

    @RequestMapping(value="register",method=RequestMethod.POST)
    @ResponseBody()
    public User register(@RequestBody Map<String,String> info){
        User user=new User(info.get("email"),info.get("nick"),info.get("password"));
        User ret=userDao.register(user);

        return ret;
    }

    @RequestMapping(value="login" , method=RequestMethod.POST)
    @ResponseBody()
    public User login(@RequestBody Map<String,String> info){
        User user=new User(info.get("email"),info.get("nick"),info.get("password"));
        User ret=userDao.login(user);
        return ret;
    }
}
