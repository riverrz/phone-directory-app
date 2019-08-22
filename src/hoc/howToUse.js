import withListener from "./withListener";
import CommentList from "./CommentList";
import BlogPost from "./BlogPost";

const CommentListWithListener = withListener(
    CommentList,
    DataSource =>  DataSource.getComments()
);

const BlogPostwithListener = withListener(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);
