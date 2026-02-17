# frozen_string_literal: true

module TerminalPage
  class TerminalController < ::ApplicationController
    requires_plugin "terminal_page"
    before_action :ensure_logged_in

    def index
      render json: { ok: true, user_id: current_user.id }
    end
  end
end
