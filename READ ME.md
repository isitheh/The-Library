Library Structure - SpringBoot + React Small Project
BackEnd - Implement the Library structure using a class with the following attributes.

Attributes:
	private integer attribute: number_of_books
	private string attribute: library_name
	/*Map of genres to book count*/
	private Map<String, Integer> bookGenres	

Getters and Setters
	Getters
		public int getNumber_of_books()
		public string getName()
		public Map<String, Integer> getBookGenres()
	Setters
		public void setNumber_of_books(int number_of_books)
		public void setName(string library_name)
		public void getBookGenres(Map<String, Integer> bookGenres)