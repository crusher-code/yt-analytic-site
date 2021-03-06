class ChannelsController < ApplicationController
    before_action :authenticate_user!, :except => [:index]
    
    def index 
        @channels = Channel.all 
        render json: @channels, status: 200
    end 
    
    def show 
        @channel = Channel.find(params[:id])
        render json: @channel, status: 200
    end 
    
    def create 
        @channel = current_user.channels.create(channel_params)
        if @channel.save 
            render json: @channel, status: 201
        else 
            render json: {error: "Channel wasn't saved"}, status: 400
        end 
    end 
    
    def update 
        @channel = current_user.channels.find(params[:id])
        if @channel.update(channel_params)
            render json: @channel, status: 200
        else 
            render json: {error: "Channel wasn't updated"}, status: 400
        end 
    end 
    
    def destroy
        @channel = current_user.channels.find(params[:id])
        if @channel.destroy 
            render json: @channel, status: 200
        else 
            render json: {error: "Couldn't delete"}, status: 400
        end 
    end
    
    private 
    def channel_params
        params.require(:channel).permit(:name, :id_channel)
    end 
end
