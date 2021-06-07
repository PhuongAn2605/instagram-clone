package fit.hanu.instagramcloningbackend.repository;

import fit.hanu.instagramcloningbackend.Entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface CommentRepo extends CrudRepository<Comment, Integer> {

    Comment save(Comment comment);
    ArrayList<Comment> findAllByPostId(String postId);
    ArrayList<Comment> findAll();
}
