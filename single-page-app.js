document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar .menu a, .sidebar .sub-menu a');
    const contentArea = document.querySelector('.column-2');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const linkText = link.textContent.trim();
            
            if (linkText === 'Career Counselling') {
                contentArea.innerHTML = `
                    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Career Counseling & Services</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            text-align: center;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        p {
            font-size: 16px;
            color: #555;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            font-size: 18px;
            color: white;
            background: #007bff;
            text-decoration: none;
            border-radius: 5px;
        }
        .btn:hover {
            background: #0056b3;
        }
        .nav-links {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            margin-top: 20px;
        }
        .nav-links a {
            text-decoration: none;
            font-size: 16px;
            color: #007bff;
            padding: 10px;
        }
        .nav-links a:hover {
            text-decoration: underline;
        }
        .section {
            margin-top: 30px;
            padding: 20px;
            background: #e8e8e8;
            border-radius: 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to Career Counseling & Services</h1>
        <p>Explore career opportunities, job postings, internships, and professional development resources.</p>
        <p>We provide guidance for students, alumni, and job seekers looking to advance their careers.</p>
        
        <div class="nav-links">
            <a href="https://www.etsu.edu/cbat/careerservices/jobsearch.php">Student Career Services</a>
            <a href="https://www.etsu.edu/cbat/alumni">Alumni Career Support</a>
       
            <a href="https://www.etsu.edu/cbat/careerservices/internships.php">Internship Opportunities</a>
         
        </div>
        
        <div class="section">
            <h2>About CBAT - College of Business and Technology</h2>
            <p>The College of Business and Technology (CBAT) at ETSU provides students with career counseling, job placement assistance, and internship opportunities to help them succeed in the professional world.</p>
            <p><strong>Contact:</strong> Director of CBAT Career Services<br>Email: laprade@etsu.edu<br>Phone: (423)439-5656</p>
        </div>

        <div class="section">
            <h2>Handshake - Your Career Connection</h2>
            <p>Handshake is the official platform for ETSU students to find job openings, internships, and networking opportunities with companies connected to the school.</p>
            <a href="https://etsu.joinhandshake.com/login" class="btn">ETSU Hanshake Connect</a>
        </div>

        <a href="https://www.etsu.edu/cbat/careerservices/" class="btn">Visit Full Career Portal</a>
    </div>
</body>
</html>
        
    </div>
    


                        



                        
                         <div class="footer">
                         <!-- <img src="imgs/footer.jpg" alt=""> -->

                      
                         </div>
                    </div>
                    
                `;
            }
        });
    });
});






