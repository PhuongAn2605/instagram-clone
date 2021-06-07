package fit.hanu.instagramcloningbackend.repository;

import fit.hanu.instagramcloningbackend.Entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public interface PostRepo extends CrudRepository<Post, Integer> {
    Post save(Post post);
    ArrayList<Post> findAll();
}
