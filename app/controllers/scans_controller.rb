class ScansController < ApplicationController
    def new
        @scan = Scan.new
    end
end
