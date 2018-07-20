class CommentsController < ApplicationController

  before_action :set_post

  def create
    @comment = @post.comments.new(comment_params)
    if @comment.save
      render json: {result: "ok", comment: @comment, post_id: @post.id}
    else
      render json: {result: "ng", msg: @comment.errors.messages}
    end
  end

  def destroy
    @comment = @post.comments.find(params[:id])
    @comment.destroy
    redirect_to post_path(@post)
  end

  private

  def set_post
    @post = Post.find(params[:post_id])
  end

  def comment_params
    params.require(:comment).permit(:name, :body)
  end

end
