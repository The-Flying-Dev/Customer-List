class Api::V1::CustomersController < ApplicationController

  def index 
    render json: Customer.all
  end

  def create 
    customer = Customer.create(customer_params)
    render json: customer 
  end

  def update 
    customer = Customer.find(params[:id])
    customer.update_attributes(customer_params)
    render json: customer 
  end

  def destroy 
    Customer.destroy(params[:id])
  end

  #whitelist
  private

  def customer_params
    params.require(:customer).permit(:id, :name, :company)
  end

end