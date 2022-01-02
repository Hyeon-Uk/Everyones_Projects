package com.dao;

import com.model.User;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;

class UserDaoTemp implements UserDaoInterFace{
    public ArrayList<User> list=new ArrayList<>();

    @Override
    public User register(@RequestBody User user) {
        list.add(user);
        return user;
    }

    @Override
    public User login(@RequestBody User user) {
        for(int i=0;i<list.size();i++){
            User u=list.get(i);
            if(u.equals(user)){
                return u;
            }
        }
        return null;
    }
    @Override
    public User getUser(@RequestBody String nick){
        for(int i=0;i<list.size();i++){
            User user=list.get(i);
            if(user.getNick().equals(nick)){
                return user;
            }
        }
        return null;
    }
}
