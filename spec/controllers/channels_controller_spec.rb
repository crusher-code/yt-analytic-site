require 'rails_helper'
RSpec.describe ChannelsController, :type => :controller do
    let(:user){create(:user)}
    describe "get index" do
        it "will put a 200 status code" do
            get :index
            expect(response.status).to eq(200)
        end
    end
    describe "get show" do
        it "will put a 200 status code" do
            get :index
            get :show, { id: 1 }
            expect(response.status).to eq(200)
        end
    end
    describe "post create" do
        it "will return 400 status code" do
            post :create
            expect(response.status).to eq(400)
        end
    end
end