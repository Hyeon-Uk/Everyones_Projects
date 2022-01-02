package com.dao;

import com.model.User;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;

public class UserDao {
    public ArrayList<User> list=new ArrayList<>();

    public User register(User user) {
        list.add(user);
        return user;
    }

    public User login(User user) {
        for(int i=0;i<list.size();i++){
            User u=list.get(i);
            if(u.equals(user)){
                return u;
            }
        }
        return null;
    }

    public User getUser(String nick){
        for(int i=0;i<list.size();i++){
            User user=list.get(i);
            if(user.getNick().equals(nick)){
                return user;
            }
        }
        return null;
    }

    public ArrayList<User> getAllUsers(){
        return list;
    }

    public String delete(String id){
        for(int i=0;i<list.size();i++){
            User user=list.get(i);
            if(user.getId().equals(id)){
                list.remove(i);
                return "remove finish";
            }
        }
        return "Don't find "+id;
    }
}
