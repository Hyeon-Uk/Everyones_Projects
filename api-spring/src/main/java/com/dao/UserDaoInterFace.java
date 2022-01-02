package com.dao;

import com.model.User;

public interface UserDaoInterFace {
    public User register(User user);
    public User login(User user);
    public User getUser(String nick);
}
