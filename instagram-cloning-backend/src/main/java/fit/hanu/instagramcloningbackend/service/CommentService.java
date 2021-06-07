package fit.hanu.instagramcloningbackend.service;

import fit.hanu.instagramcloningbackend.Entity.Comment;
import fit.hanu.instagramcloningbackend.repository.CommentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService {

    @Autowired
    CommentRepo commentRepo;

    @Autowired
    UserService userService;

    public Comment submitCommentToDB(Comment comment) {
        return commentRepo.save(comment);
    }

    public ArrayList<Comment> getAllCommentsForDB(String postId){

        ArrayList<Comment> commentList=commentRepo.findAllByPostId(postId);

        for(int i=0;i<commentList.size();i++) {
            Comment commentItem=commentList.get(i);
            commentItem.setUserName(userService.displayUserMetaData(commentItem.getUserId()).getUserName());
        }

        return commentList;

    }
}
