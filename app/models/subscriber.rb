class Subscriber < ApplicationRecord
  belongs_to :project # mom
  belongs_to :user # dad (2 parent objects are okay)
end
