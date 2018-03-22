package servlets;

import java.io.IOException;
import java.lang.reflect.Type;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.http.HttpEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import model.Organization;

@WebServlet(asyncSupported = true, urlPatterns = { "/GetOrganizations" })
public class GetOrganizations extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private static final String ENDPOINT = "http://vollyapp.azurewebsites.net/api/organizations";
	private static CloseableHttpClient _client;
       
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		List<Organization> allOrgs;
		_client = HttpClients.createDefault();
		HttpEntity entity = _client.execute(new HttpGet(ENDPOINT)).getEntity();
		String result = EntityUtils.toString(entity);
		Type type = new TypeToken<List<Organization>>() {
		}.getType();
		allOrgs = new Gson().fromJson(result, type);
		EntityUtils.consume(entity);
		_client.close();
		
		String json = new Gson().toJson(allOrgs);
		response.setContentType("application/json");
		System.out.println(json);
		response.getWriter().write(json);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}