require 'rails_helper'
RSpec.describe ChannelsController, :type => :controller do
    describe "get index" do
        it "will put a 200 status code" do
            get :index
            expect(response.status).to eq(200)
        end
    end
    describe "get show" do
        it "will put a 200 status code" do
            get :show
            expect(response.status).to eq(200)
        end
    end
end