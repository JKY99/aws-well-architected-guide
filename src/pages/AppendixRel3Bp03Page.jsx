import PageNav from "../components/PageNav";
import "../components/DocContent.css";

export default function AppendixRel3Bp03Page() {
  return (
    <article className="doc-content">
      <h1>REL03-BP03 — 서비스 간 결합도 줄이기</h1>
      <div className="doc-note">
        <div className="doc-note-title">위험 수준: 높음</div>
        <p>이 모범 사례를 따르지 않을 경우 비즈니스에 미치는 위험이 높습니다.</p>
      </div>
      <p>동기식 직접 호출 대신 메시지 큐나 이벤트 버스를 사용하여 서비스 간 결합도를 줄이고 각 서비스의 독립성을 높입니다.</p>
      <h2>원하는 결과</h2>
      <p>한 서비스의 장애가 다른 서비스에 전파되지 않는 느슨하게 결합된 아키텍처</p>
      <h2>일반적인 안티패턴</h2>
      <ul>
        <li>동기식 직접 호출 연쇄</li>
        <li>강하게 결합된 서비스</li>
        <li>공유 라이브러리 남용</li>
      </ul>
      <h2>이 모범 사례 수립의 이점</h2>
      <ul>
        <li>장애 격리</li>
        <li>독립적 확장</li>
        <li>유연한 서비스 교체</li>
      </ul>
      <h2>구현 지침</h2>
      <ul>
        <li>SQS로 비동기 메시지 큐 구현</li>
        <li>EventBridge로 이벤트 기반 아키텍처 구현</li>
        <li>데이터 중복 허용</li>
      </ul>
      <h2>관련 AWS 서비스 및 리소스</h2>
      <ul>
        <li>Amazon SQS</li>
        <li>Amazon SNS</li>
        <li>Amazon EventBridge</li>
        <li>AWS Step Functions</li>
      </ul>
      <PageNav />
    </article>
  );
}
