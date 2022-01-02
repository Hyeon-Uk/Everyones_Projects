import com.dao.UserDao;
import com.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;

public class TestFile {
    UserDao userDao=new UserDao();

    @Test
    public void test1(){
        User user=new User("rlagusdnr120@gmail.com","khu147","1234");
        userDao.register(user);

        User userGet=userDao.getUser(user.getNick());
        assertThat(user,is(userGet));


    }
}
