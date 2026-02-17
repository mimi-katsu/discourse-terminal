# frozen_string_literal: true

# name: terminal_page
# version: 0.1

after_initialize do
  # JSON endpoint (data)
  Discourse::Application.routes.append do
    get "/terminal" => "terminal_page/terminal#index", constraints: { format: :json }
  end
end
