package db

import (
  "time"
  "github.com/influxdb/influxdb/client/v2"
  "log"
  "net/http"
  "fmt"
 // "url"
)

const (
    MyDB = "iplonDb"
    username = "admin"
    password = "admins"	
)


func GetConnection() (c client.Client, err error){

// Make client
    clnt,conErr := client.NewHTTPClient(client.HTTPConfig{
        Addr: "http://localhost:8086",
        Username: username,
        Password: password,
    })
    
    return clnt,conErr

}

func PutData(rspns http.ResponseWriter,rqst *http.Request){
	

name2 :=rqst.FormValue("data1")
secData :=rqst.FormValue("data2")

    //c,conErr := GetConnection()    
    
    //if conErr != nil {
		//log.Fatal(conErr)
	//}
	
	c,clntErr :=  GetConnection()

    if clntErr != nil {
		log.Fatal(clntErr)
	}
	

    // Create a new point batch
    bp,batchErr := client.NewBatchPoints(client.BatchPointsConfig{
        Database:  MyDB,
        Precision: "s",
    })
    
        if batchErr != nil {
		log.Fatal(batchErr)
	}

    // Create a point and add to batch
    tags := map[string]string{"host": "primary",
		"plant": name2,
		"second": secData,
		}
    fields := map[string]interface{}{
        "power":   27.8,
    }
    pt,ptErr := client.NewPoint("power", tags, fields, time.Now())
    bp.AddPoint(pt)
    
            if ptErr != nil {
		log.Fatal(ptErr)
	}

    // Write the batch
    c.Write(bp)
//http.Redirect(rspns, rqst, "getdata.html", 301)
log.Println("data written suucessfully...")

}


// queryDB convenience function to query the database
func queryDB(clnt client.Client, cmd string) (res []client.Result, err error) {
    q := client.Query{
        Command:  cmd,
        Database: MyDB,
    }
    if response, err := clnt.Query(q); err == nil {
        if response.Error() != nil {
            return res, response.Error()
        }
        res = response.Results
    }
    return res, nil
}



func GetData(MyMeasurement string) (res []client.Result){
			q := fmt.Sprintf("SELECT * FROM %s LIMIT %d", MyMeasurement, 20)		
			
	c, clntErr :=  GetConnection()
    if clntErr != nil {
		log.Fatal(clntErr)
	}
			
			res, err := queryDB(c, q)
			if err != nil {
				log.Fatal(err)
			}

						
			return res 
			 			
}

func GetDataWhr(query string) (res []client.Result){
          //  q := fmt.Sprintf("SELECT * FROM %s LIMIT %d", MyMeasurement, 20)        
            
    c, clntErr :=  GetConnection()
    if clntErr != nil {
        log.Fatal(clntErr)
    }
            
            res, err := queryDB(c, query)
            if err != nil {
                log.Fatal(err)
            }

                        
            return res 
                        
}






