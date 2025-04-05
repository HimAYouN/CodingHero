import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class _002PlaylistHistory {
    public static void main(String[] args) {
        List<String> actions = Arrays.asList();
        
    }
    
    public static List<String> playlistManager(List<String> actions) {
        
        // Implement the function

        ArrayList<String> arr = new ArrayList<>();
        
        for (int i = 0; i<actions.size(); i++){
            if(actions.get(i).equals("undo()")){
                if(!arr.isEmpty()){
                    arr.remove(arr.size() - 1);
                }
            }else{
                String cmd = actions.get(i);
                String[] parts = cmd.split("'");
                String songName = parts[1];
                arr.add("\"" + songName + "\"");
            }
        }
        return arr;
    }
}
