class CommentsController < ApplicationController

  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.new(comment_params)
    if @comment.save
      render json: {result: "ok", comment: @comment}
    else
      render json: {result: "ng", msg: @comment.errors.messages}
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:name, :body)
  end

end
