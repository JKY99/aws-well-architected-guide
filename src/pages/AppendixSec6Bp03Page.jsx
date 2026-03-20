import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixSec6Bp03Page() {
  return (
    <article className="doc-content">
      <h1>SEC06-BP03 — 수동 관리 및 대화형 접근 축소</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 중간</div>
        <p>이 모범 사례를 따르지 않을 경우 비인가 변경 및 잘못된 구성의 운영 위험이 증가합니다.</p>
      </div>
      <p>
        프로그래밍 방식의 스크립트와 자동화 문서(런북)가 컴퓨팅 리소스에 대한 승인된 작업을 캡처합니다. 자동화를 사용할 수 없어 사람의 판단이 필요한 경우에만 컴퓨팅 리소스에 대한 직접 접근을 허용합니다.
      </p>
      <h2>원하는 결과</h2>
      <ul>
        <li>프로그래밍 방식의 스크립트와 자동화 문서(런북)가 컴퓨팅 리소스에 대한 승인된 작업을 캡처</li>
        <li>변경 탐지 시스템을 통해 자동으로 또는 사람의 판단이 필요할 때 수동으로 런북 시작</li>
        <li>자동화를 사용할 수 없는 긴급 상황에서만 컴퓨팅 리소스에 대한 직접 접근 허용</li>
        <li>모든 수동 활동이 로깅되고 자동화 기능을 개선하기 위한 검토 프로세스에 포함</li>
      </ul>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>SSH 또는 RDP 프로토콜로 Amazon EC2 인스턴스에 대화형 접근</li>
        <li>개별 사용자 로그인(/etc/passwd 또는 Windows 로컬 사용자) 유지</li>
        <li>여러 사용자 간에 비밀번호 또는 개인 키 공유</li>
        <li>소프트웨어 수동 설치 및 구성 파일 생성/업데이트</li>
        <li>소프트웨어 수동 업데이트 또는 패치</li>
        <li>문제 해결을 위해 인스턴스에 로그인</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>의도치 않은 변경 및 잘못된 구성의 운영 위험 감소</li>
        <li>SSH/RDP 접근 제거로 비인가 작업에 대한 공격 표면 감소</li>
        <li>승인된 활동의 세분화된 정의 및 감사 가능</li>
        <li>자격 증명 공유 관리 오버헤드 제거</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>EC2 인스턴스에 AWS Systems Manager Agent(SSM Agent)를 설치하고 기본 AMI에 포함되어 있는지 확인합니다.</li>
        <li>IAM 역할에 AmazonSSMManagedInstanceCore 관리형 정책이 포함되어 있는지 확인합니다.</li>
        <li>사용자 데이터 또는 EC2 Image Builder를 통해 SSH, RDP 및 원격 접근 서비스를 비활성화합니다.</li>
        <li>보안 그룹 규칙이 22/tcp(SSH) 및 3389/tcp(RDP) 포트를 거부하는지 확인하고 AWS Config 탐지를 구현합니다.</li>
        <li>IAM 정책 제어와 함께 Systems Manager에서 자동화, 런북, 실행 명령을 정의합니다.</li>
        <li>필요한 경우 AWS Systems Manager Session Manager를 사용하여 대화형 접근을 허용하고 CloudWatch Logs 또는 S3 감사 로깅을 구성합니다.</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>AWS Systems Manager — 기본 솔루션</li>
        <li>AWS Systems Manager Session Manager — SSH/RDP 없는 안전한 대화형 접근</li>
        <li>AWS CloudTrail — API 활동 감사</li>
        <li>Amazon CloudWatch Logs — 세션 활동 로깅</li>
        <li>AWS Config — 보안 그룹 규칙 규정 준수 모니터링</li>
        <li>EC2 Image Builder — 보안 강화된 기본 이미지 생성</li>
      </ul>
      <PageNav />
    </article>
  );
}
