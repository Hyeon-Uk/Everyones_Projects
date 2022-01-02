import com.dao.UserDaoInterFace;
import com.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class RestAPI {
    @Autowired
    public UserDaoInterFace userDao;

    @Test
    public void AuthTest(){
        User user=new User("rlagusdnr120@gmail.com","khu147","1234");
        userDao.register(user);

        User getUser=userDao.getUser("khu147");

        assertThat(user,is(getUser));
    }
}
