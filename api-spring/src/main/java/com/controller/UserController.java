package com.controller;

import com.dao.UserDao;
import com.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("user")
public class UserController {

    @Autowired
    public UserDao userDao;

    @RequestMapping("find/{nick}")
    @ResponseBody()
    public User getUser(@PathVariable String nick){
        User user=userDao.getUser(nick);
        return user;
    }

    @RequestMapping("/users")
    @ResponseBody()
    public ArrayList<User> getAllUsers(){
        ArrayList<User> users=userDao.getAllUsers();
        return users;
    }
}
