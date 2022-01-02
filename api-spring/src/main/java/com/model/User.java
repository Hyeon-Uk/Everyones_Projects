package com.model;

public class User {
    private String email;
    private String nick;
    private String password;

    public User(String email, String nick, String password) {
        this.email = email;
        this.nick = nick;
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNick() {
        return nick;
    }

    public void setNick(String nick) {
        this.nick = nick;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
