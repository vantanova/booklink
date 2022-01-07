require "test_helper"

class LinkbookControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get linkbook_index_url
    assert_response :success
  end

  test "should get create" do
    get linkbook_create_url
    assert_response :success
  end

  test "should get update" do
    get linkbook_update_url
    assert_response :success
  end

  test "should get delete" do
    get linkbook_delete_url
    assert_response :success
  end
end
