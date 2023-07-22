class ScansController < ApplicationController
    def new
        @scan = Scan.new
    end

    def create
        scan = Scan.new(scan_params)
        scan.user = current_user
        if scan.save
            redirect_to scan_path(scan)
        else
            render :new, status: :unprocessable_entity
        end
    end

    def show
        @scan = Scan.find(params[:id])
    end

    def index
        @scans = Scan.all
    end

    private

    def scan_params
        params.permit(:title, :transcriptions, :image)
    end
end
