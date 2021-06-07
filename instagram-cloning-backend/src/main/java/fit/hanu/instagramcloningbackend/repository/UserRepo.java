package fit.hanu.instagramcloningbackend.repository;

import fit.hanu.instagramcloningbackend.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends CrudRepository<User, Integer>{

    User save(User user);
    User findByUserId(String userId);
}
