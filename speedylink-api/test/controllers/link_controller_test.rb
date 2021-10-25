require "test_helper"

class LinkControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get link_index_url
    assert_response :success
  end

  test "should get create" do
    get link_create_url
    assert_response :success
  end

  test "should get update" do
    get link_update_url
    assert_response :success
  end

  test "should get delete" do
    get link_delete_url
    assert_response :success
  end
end
